import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, Languages, ChevronUp, ChevronDown } from "lucide-react";

export function AccessibilityWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const text = document.body.innerText;
        const utterance = new SpeechSynthesisUtterance(text.substring(0, 500));
        utterance.lang = 'es-ES';
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    }
  };

  const handleTranslate = () => {
    alert("Función de traducción automática: En una implementación real, esto integraría Google Translate API o similar para traducir el contenido del sitio.");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-6 bottom-6 z-50"
    >
      <div className="bg-white border border-border shadow-2xl overflow-hidden">
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-3 bg-primary text-primary-foreground flex items-center justify-between gap-2 hover:bg-primary/90 transition-colors duration-200"
        >
          <span className="text-sm font-sans font-medium">Accesibilidad</span>
          {isExpanded ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
        </button>

        {/* Options */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {/* Text to Speech */}
                <button
                  onClick={handleTextToSpeech}
                  className={`w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-secondary transition-colors duration-200 ${
                    isSpeaking ? 'bg-secondary' : ''
                  }`}
                >
                  <Volume2 size={20} className={isSpeaking ? 'text-primary' : 'text-foreground'} />
                  <div>
                    <div className="text-sm font-sans font-medium text-foreground">
                      {isSpeaking ? 'Detener lectura' : 'Lectura por voz'}
                    </div>
                    <div className="text-xs font-sans text-muted-foreground">
                      Text-to-Speech
                    </div>
                  </div>
                </button>

                {/* Translation */}
                <button
                  onClick={handleTranslate}
                  className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-secondary transition-colors duration-200"
                >
                  <Languages size={20} className="text-foreground" />
                  <div>
                    <div className="text-sm font-sans font-medium text-foreground">
                      Traducir
                    </div>
                    <div className="text-xs font-sans text-muted-foreground">
                      Traducción automática
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
