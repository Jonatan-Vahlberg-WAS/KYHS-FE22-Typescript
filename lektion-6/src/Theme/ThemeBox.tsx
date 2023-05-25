import { ThemeProvider } from "./ThemeContext"
import ThemeDisplay from "./ThemeDisplay"
import ThemeResetter from "./ThemeResetter"
import ThemeToggler from "./ThemeToggler"


const ThemeBox = () => {

    return (
        <ThemeProvider>
            <div>
            <h1>Theme Display</h1>
            <ThemeDisplay />
            <h1>Theme Toggler</h1>
            <ThemeToggler />
            <h1>Theme Resetter</h1>
            <ThemeResetter />
        </div>
        </ThemeProvider>
    )
}

export default ThemeBox