// Q26. Notification System
abstract class Notification {
  abstract send(message: string): void;
}

class EmailNotification extends Notification {
  send(message: string): void {
    console.log(`Email sent: ${message}`);
  }
}

class SMSNotification extends Notification {
  send(message: string): void {
    console.log(`SMS sent: ${message}`);
  }
}

const notifications: Notification[] = [
  new EmailNotification(),
  new SMSNotification()
];

for (const notification of notifications) {
  notification.send("Your order has been shipped");
}
