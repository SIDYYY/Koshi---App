// tailwind.config.js
module.exports = {
  content: [],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Green Variants
        green_primary: "#5CB88F", // Active checkbox, tabBarActiveTintColor, etc.
        green_secondary: "#439F48", // Secondary green tint color for icons
        green_bg: "#E8F5E9", // Green background for icons
        green_logout_bg: "#E9F5E9", // Logout background color

        // White
        white: "#F3F5F7", // Main white color for icons

        black_icon_bg: "#B8B8B8",

        // Gray Variants
        gray_inactive: "#9B9B9B", // Inactive/disabled text, borders, placeholders
        gray_button_focused: "#E4E7EB", // Button focused, isLoading/Disabled state
        gray_profile_bg: "#F7F7F7", // Default profile background
        gray_border: "#E5E4E2", // Form input borders
        gray_filter_inactive: "#E0E0E0", // Filter inactive button
        gray_modal_backdrop: "#00000040", // Modal backdrop

        // Blue Variants
        blue_icon_bg: "#EAEBFF", // Blue background for icons
        blue_primary: "#304FFF", // Main blue color for icons

        // Orange/Yellow Variants
        orange_primary: "#F57E16", // Main orange/yellow color for icons
        orange_icon_bg: "#FFF9C5", // Orange/yellow background for icons
        //Yellow
        yellow_primary: "#ECAE36",

        // Red Variants
        red_icon_bg: "#FFEBED", // Red background for icons
        red_primary: "#F34336", // Main red color for icons
        red_error_bg: "#FFF9F9", // Error input background

        // Success/Toast Colors
        toast_success: "#49D663", // Toast success
        toast_error: "#FD355A", // Toast error

        // Backgrounds/Forms
        form_correct_bg: "#F8FFFD", // Correct form input background
        form_default_border: "#E5E4E2", // Default border for form inputs

        // Miscellaneous
        car_model_card: "#525252", // Model car card text
      },
    },
  },
  plugins: [],
};
