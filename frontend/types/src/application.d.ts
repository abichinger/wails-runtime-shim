export interface Application {
    /**
     * Hides a certain method by calling the HideMethod function.
     *
     * @return {Promise<void>}
     *
     */
    Hide(): Promise<void>;
    /**
     * Calls the ShowMethod and returns the result.
     *
     * @return {Promise<void>}
     */
    Show(): Promise<void>;
    /**
     * Calls the QuitMethod to terminate the program.
     *
     * @return {Promise<void>}
     */
    Quit(): Promise<void>;
}
