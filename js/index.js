function appStart(){
    const handleKeydown = () => {
        console.log("key has been pressed");
    };
    window.addEventListener("keydown", handleKeydown);
};

appStart();