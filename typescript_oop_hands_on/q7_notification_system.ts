class Notification {
    send(): void {
        console.log("Notification sent");
    }
}

class EmailNotification extends Notification {
    send(): void {
        console.log("Email notification sent");
    }
}

class SMSNotification extends Notification {
    send(): void {
        console.log("SMS notification sent");
    }
}

let email = new EmailNotification();
let sms = new SMSNotification();

email.send();
sms.send();
