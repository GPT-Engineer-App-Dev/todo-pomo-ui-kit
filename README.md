# todo-pomo-ui-kit

# UI Specification Document

## 1. Todo App UI Component

### Structure
- Title: "Todo App" with star emojis on either side.
- Input Field: Allows text entry for new todos.
- Add Button: A plus icon in a blue button, triggers the addition of a new todo.
- Todo List: An area where added todos are listed.
- Todo Item: Each todo has a checkbox to mark as done, the todo text, and a delete button.
- Delete Button: A red trash bin icon, removes the todo from the list.

### Behavior
- Input Field: Accepts text input and clears after the add button is clicked.
- Add Button: On click, adds the input text as a new todo to the list.
- Todo Checkbox: Toggles the state of the todo between done and not done.
- Delete Button: On click, removes the associated todo from the list.

### Style
- Title Font: Bold and slightly larger than the other text elements.
- Add/Delete Buttons: Icon-based with clear color coding (blue for add, red for delete).
- Todo List: Each todo item has a minimal design with a checkbox leading the text.
- Checkboxes: A custom-designed icon that toggles between checked and unchecked states.
- Interactivity: Buttons have a hover effect indicating clickability.

## 2. Pomodoro Timer UI Component

### Structure
- Title: "Pomodoro Timer" in plain text.
- Timer Display: Large digits showing the current countdown time.
- Pause Button: A yellow button that pauses the timer.
- Reset Button: A red button that resets the timer to its initial state.

### Behavior
- Timer: Counts down in minutes and seconds.
- Pause Button: Toggles between pause and resume functionality for the timer.
- Reset Button: Stops the timer if running and resets the countdown.

### Style
- Title Font: Plain, similar in size to the Todo App title but without additional decorations.
- Timer Display: Large, bold digits for easy readability.
- Buttons: Rectangular with rounded corners and color-coded for functionality.
- Interactivity: Buttons indicate clickability through a change in color or shade on hover.

### General UI Guidelines
- Consistency: The design language is consistent across both UI components, using similar fonts, button styles, and color palettes.
- Responsiveness: UI components are responsive to different screen sizes and maintain their layout integrity.
- Accessibility: Text is legible, and interactive elements are accessible, with consideration for color blindness and keyboard navigation.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App-Dev/todo-pomo-ui-kit.git
cd todo-pomo-ui-kit
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
