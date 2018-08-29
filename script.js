/* \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/-- */
/* \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/-- */
/* \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/-- */

/* /\/\/\  Global Functions /\/\/\ */

function init_page() {
	
	// Load variables
	//
	var generate_button = document.getElementById("generate_button");
	var output_textbox = document.getElementById("output_textbox");
	var copy_button = document.getElementById("copy_button");
	var clear_button = document.getElementById("clear_button");
	var letters_only_cb = document.getElementById("letters_only_cb");
	var numerals_only_cb = document.getElementById("numerals_only_cb");
	var custom_length_cb = document.getElementById("custom_length_cb");
	var custom_length_tl = document.getElementById("custom_length_tl");
	var custom_length_tb = document.getElementById("custom_length_tb");
	var custom_prefix_cb = document.getElementById("custom_prefix_cb");
	var custom_prefix_tl = document.getElementById("custom_prefix_tl");
	var custom_prefix_tb = document.getElementById("custom_prefix_tb");
	var advanced_options_panel = document.getElementById("advanced_options_panel");
	var advanced_options_button = document.getElementById("advanced_options_button");
	var help_div_button = document.getElementById("help_button");
	var help_div = document.getElementById("help_div");
	var help_close_button = document.getElementById("close_help");
	// --------------------------------------
	
	// Stylize page
	//
	// Generate button
	generate_button.style.display = "inline-block";
	// Output textbox
	output_textbox.style.display = "none";
	copy_button.style.display = "none";
	clear_button.style.display = "none";
	// Advanced panel
	advanced_options_panel.style.display = "none";
	custom_length_tl.style.display = "inline-block";
	custom_length_tb.style.display = "none";
	custom_prefix_tl.style.display = "inline-block";
	custom_prefix_tb.style.display = "none";
	// Help panel
	help_div.style.display = "none";
	// --------------------------------------
	
	// Add event listeners
	//
	// Generate button
	generate_button.addEventListener("click", function() { generate_clear_code(); });
	// Copy button
	copy_button.addEventListener("click", function() { copy_code(); });
	// Clear button
	clear_button.addEventListener("click", function() { generate_clear_code(); });
	// Advanced options toggle
	advanced_options_button.addEventListener("click", function() { advanced_options_panel_toggle(); });
	// Letters only toggle
	letters_only_cb.addEventListener("click", function() { letters_only_toggle(); });
	// Numerals only toggle
	numerals_only_cb.addEventListener("click", function() { numerals_only_toggle(); });
	// Custom length checkbox toggle
	custom_length_cb.addEventListener("click", function() { custom_length_toggle(); });
	// Custom prefix checkbox toggle
	custom_prefix_cb.addEventListener("click", function() { custom_prefix_toggle(); });
	// Help div panel
	help_div_button.addEventListener("click", function() { help_panel_toggle(); });
	help_close_button.addEventListener("click", function() { help_panel_toggle(); });
	// --------------------------------------
	
}

window.onload = function() { init_page(); };

/* /\/\/\  Global Functions /\/\/\ */

/* \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/-- */
/* \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/-- */
/* \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/-- */

/* /\/\/\ Local Functions /\/\/\ */

function advanced_options_panel_toggle() {
	
	// Load variables
	//
	var advanced_options_panel = document.getElementById("advanced_options_panel");
	// --------------------------------------
	
	// Function
	//
	if (advanced_options_panel.style.display == "none" || advanced_options_panel.style.display == "") {
		advanced_options_panel.style.display = "inline-block";
	} else {
		advanced_options_panel.style.display = "none";
	}
	// --------------------------------------
	
}

function letters_only_toggle() {
	
	// Load variables
	//
	var letters_only_cb = document.getElementById("letters_only_cb");
	var numerals_only_cb = document.getElementById("numerals_only_cb");
	// --------------------------------------
	
	// Function
	//
	if (letters_only_cb.checked) {
		numerals_only_cb.disabled = true;
	} else {
		numerals_only_cb.disabled = false;
	}
	// --------------------------------------
	
}

function numerals_only_toggle() {
	
	// Load variables
	//
	var letters_only_cb = document.getElementById("letters_only_cb");
	var numerals_only_cb = document.getElementById("numerals_only_cb");
	// --------------------------------------
	
	// Function
	//
	if (numerals_only_cb.checked) {
		letters_only_cb.disabled = true;
	} else {
		letters_only_cb.disabled = false;
	}
	// --------------------------------------
	
}

function custom_length_toggle() {
	
	// Load variables
	//
	var custom_length_cb = document.getElementById("custom_length_cb");
	var custom_length_tl = document.getElementById("custom_length_tl");
	var custom_length_tb = document.getElementById("custom_length_tb");
	// --------------------------------------
	
	// Function
	//
	if (custom_length_cb.checked) {
		custom_length_tb.style.width = custom_length_tl.offsetWidth + "px";
		custom_length_tl.style.display = "none";
		custom_length_tb.style.display = "inline-block";
	} else {
		custom_length_tl.style.display = "inline-block";
		custom_length_tb.style.display = "none";
	}
	// --------------------------------------
	
}

function custom_prefix_toggle() {
	
	// Load variables
	//
	var custom_prefix_cb = document.getElementById("custom_prefix_cb");
	var custom_prefix_tl = document.getElementById("custom_prefix_tl");
	var custom_prefix_tb = document.getElementById("custom_prefix_tb");
	// --------------------------------------
	
	// Function
	//
	if (custom_prefix_cb.checked) {
		custom_prefix_tb.style.width = custom_prefix_tl.offsetWidth + "px";
		custom_prefix_tl.style.display = "none";
		custom_prefix_tb.style.display = "inline-block";
	} else {
		custom_prefix_tl.style.display = "inline-block";
		custom_prefix_tb.style.display = "none";
	}
	// --------------------------------------
	
}

function random_number(minimum, maximum) {
	
	// Function
	//
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	// --------------------------------------
	
}

function symbol_is_symbol(input_symbol) {
	
	// Function 
	//
	switch (input_symbol) {
		case 35: 
		case 36: return true; break;
		case 38: return true; break;
		case 42:
		case 43: return true; break;
		case 45: return true; break;
		case 64: return true; break;
		case 95: return true; break;
		default: return false; break;
	}
	// --------------------------------------
	
}

function load_preferences() {
	
	// Load variables
	//
	var numerals_only_cb = document.getElementById("numerals_only_cb");
	var letters_only_cb = document.getElementById("letters_only_cb");
	var use_specials_cb = document.getElementById("use_specials_cb");
	var no_consecutives_cb = document.getElementById("no_consecutives_cb");
	var letters_only, numerals_only, use_specials, no_consecutives, custom_length, custom_prefix;
	// --------------------------------------
	
	// Function
	//
	if (letters_only_cb.checked) { letters_only = true; } else { letters_only = false; }
	if (numerals_only_cb.checked) { numerals_only = true; } else { numerals_only = false; }
	if (use_specials_cb.checked) { use_specials = true; } else { use_specials = false; }
	if (no_consecutives_cb.checked) { no_consecutives = true; } else { no_consecutives = false; }
	if (custom_length_cb.checked && custom_length_tb.value != "") { custom_length = custom_length_tb.value; } else { custom_length = 10; }
	if (custom_prefix_cb.checked && custom_prefix_tb.value != "") { custom_prefix = custom_prefix_tb.value; } else { custom_prefix = false; }
	// 
	generate_code(letters_only, numerals_only, use_specials, no_consecutives, custom_length, custom_prefix);
	// --------------------------------------
	
}

function generate_code(letters_only, numerals_only, use_specials, no_consecutives, length, prefix) {
	
	// Load variables
	//
	var output_textbox = document.getElementById("output_textbox");
	var current_symbol = "";
	var previuos_symbol = "";
	var final_code = "";
	// --------------------------------------
	
	// Function
	//
	// Check for custom prefix and add it if there is one 
	if (prefix != false || prefix != "") {
		final_code += prefix;
	}
	// While the code length is less than desired
	while (final_code.length < length) {
		// New random number
		current_symbol = random_number(35, 122);
		
		// Filter for no consecutives
		if (no_consecutives == true && current_symbol == previuos_symbol) {
			while (current_symbol == previuos_symbol) {
				previuos_symbol = current_symbol;
				current_symbol = random_number(35, 122);
				if (current_symbol != previuos_symbol) {
					break;
				}
			}
		}
		
		// Filter for letters only
		if (letters_only == true && ((current_symbol >= 65 && current_symbol <= 90) || (current_symbol >= 97 && current_symbol <= 122))) {
			final_code += String.fromCharCode(current_symbol);
			previuos_symbol = current_symbol;
			continue;
		}
		
		// Filter for numerals only
		if (numerals_only == true && (current_symbol >= 48 && current_symbol <= 57)) {
			final_code += String.fromCharCode(current_symbol);
			previuos_symbol = current_symbol;
			continue;
		}
		
		// Filter for special_characters
		if (use_specials == true && (symbol_is_symbol(current_symbol))) {
			final_code += String.fromCharCode(current_symbol);
			previuos_symbol = current_symbol;
			continue;
		}
		
		// Nothing is selected and any symbol can be added !!!!!!!
		if ( (letters_only == false && numerals_only == false) && ((current_symbol >= 48 && current_symbol <= 57) || (current_symbol >= 65 && current_symbol <= 90) || (current_symbol >= 97 && current_symbol <= 122))) {
			final_code += String.fromCharCode(current_symbol);
			previuos_symbol = current_symbol;
			continue;
		}
	}
	// Output the code to the textbox
	output_textbox.value = final_code;
	// --------------------------------------
	
}

function generate_clear_code() {

	// Load variables
	//
	var generate_button = document.getElementById("generate_button");
	var output_textbox = document.getElementById("output_textbox");
	var copy_button = document.getElementById("copy_button");
	var clear_button = document.getElementById("clear_button");
	// --------------------------------------
	
	// Function
	//
	if (generate_button.style.display == "none" || generate_button.style.display == "") {
		generate_button.style.display = "inline-block";
		output_textbox.style.display = "none";
		copy_button.style.display = "none";
		clear_button.style.display = "none";
	} else {
		generate_button.style.display = "none";
		load_preferences();
		output_textbox.style.display = "inline-block";
		copy_button.style.display = "inline-block";
		clear_button.style.display = "inline-block";		
	}
	// --------------------------------------
}

function copy_code() {
	
	// Load variables
	//
	var output_textbox = document.getElementById("output_textbox");
	// --------------------------------------
	
	// Function
	//
	prompt("Ctrl + C to copy ENTER to close", output_textbox.value);
	// --------------------------------------
}

function help_panel_toggle() {
	
	// Load variables
	//
	var help_div = document.getElementById("help_div");
	// --------------------------------------
	
	// Function
	//
	if (help_div.style.display == "none" || help_div.style.display == "") {
		help_div.style.display = "inline";
	} else {
		help_div.style.display = "none";
	}
	// --------------------------------------
	
}

/* /\/\/\  Local Functions /\/\/\ */

/* \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/-- */
/* \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/-- */
/* \--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/--\--/-- */