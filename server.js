const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
    console.log('Received webhook: ', req.body);

    // ดึง userId ของผู้ส่งข้อความ
    const events = req.body.events;
    if (events && events.length > 0) {
        const userId = events[0].source.userId;
        console.log('User ID:', userId);
    }

    res.sendStatus(200); // ส่ง 200 OK กลับ LINE
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
