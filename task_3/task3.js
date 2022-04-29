function onloadAnalog() {
    if (document.readyState === 'loading') {
        // Do something before DOMContentLoaded
        console.log(`readyState status: ${document.readyState}`);
        document.addEventListener('DOMContentLoaded', () => {
            // Do something after DOMContentLoaded
            console.log(`readyState status: ${document.readyState}`);
        }

        );
    }
}

onloadAnalog();