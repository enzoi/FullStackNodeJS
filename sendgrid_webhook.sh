function localtunnel {
    lt -s https://asdlkjfaldslfja.localtunnel.me/api/surveys/webhooks --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
