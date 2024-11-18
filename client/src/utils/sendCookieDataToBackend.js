// client/src/utils/sendCookieDataToBackend.js
import Cookies from "js-cookie";

const sendCookieDataToBackend = async () => {
	let userCookie = Cookies.get("UserID"); // supposed to be const
	console.log("Retrieved UserID cookie:", userCookie);
	if (userCookie === undefined) {
		console.error("No user cookie found");
		// userCookie = 1; // horrible practice - FIX ASAP
	}
	if (userCookie) {
		try {
			const userData = JSON.parse(userCookie);
			console.log("Sending UserID to backend:", userData);
			const response = await fetch(
				"http://localhost:5001/api/receiveUserID",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ UserID: userData }),
				},
			);
			if (response.ok) {
				console.log("UserID sent successfully");
				return true;
			} else {
				console.error("Failed to send UserID:", response.statusText);
				return false;
			}
		} catch (error) {
			console.error("Error parsing UserID:", error);
		}
	} else {
		console.error("No user cookie found");
	}
};

// Call the function to send UserID
export default sendCookieDataToBackend;
