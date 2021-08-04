let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:5000';
        break;

        case 'travel-agency-client-2021':
            APIURL = 'https://travel-app-blue-badge.herokuapp.com'
}

export default APIURL