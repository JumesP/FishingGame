import Cookies from 'js-cookie';

const sendCookieDataToBackend = async () => {
    const userCookie = Cookies.get('UserID');
    if (userCookie) {
        try {
            const userData = JSON.parse(userCookie);
            console.log('Sending UserID to backend:', userData);
            const response = await fetch('http://localhost:5001/api/receiveUserID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ UserID: userData }),
            });
            if (response.ok) {
                console.log('UserID sent successfully');
            } else {
                console.error('Failed to send UserID:', response.statusText);
            }
        } catch (error) {
            console.error('Error parsing UserID:', error);
        }
    } else {
        console.error('No user cookie found');
    }
};

// Call the function to send UserID
export default sendCookieDataToBackend;