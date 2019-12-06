import React from "react";
import OnlyText from "./components/OnlyText";

function App() {
    return (
        <>
            <OnlyText>
                <div>Single nested</div>
            </OnlyText>
            <OnlyText>
                <div>
                    <div>Double nested</div>
                </div>
            </OnlyText>
        </>
    );
}

export default App;
