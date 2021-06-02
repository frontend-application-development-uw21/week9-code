import { useThemeContext } from "./App";

function ThemedElementChild() {
    const {theme, setTheme} = useThemeContext();
    return (
        <div>
            <h2>Themed Element Child ({theme})</h2>
            <button
                onClick={() => setTheme('black')}
            >
                Set theme to black
            </button>
            <button
                onClick={() => setTheme('orange')}
            >
                Set theme to orange
            </button>
            <button
                onClick={() => setTheme('yellow')}
            >
                Set theme to yellow
            </button>
        </div>
    );
}

export default function ThemedElement() {
    const {theme} = useThemeContext();

    return (
        <div style={{color: theme}}>
            <h1>Themed element ({theme})</h1>
            <ThemedElementChild />
        </div>
    );
}