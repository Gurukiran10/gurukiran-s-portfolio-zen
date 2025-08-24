import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const FloatingActionButton = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 500, damping: 30 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Button
        onClick={scrollToContact}
        className="btn-accent h-14 w-14 rounded-full shadow-lg hover:shadow-xl focus-ring"
        size="icon"
        aria-label="Let's Connect"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </motion.div>
  );
};