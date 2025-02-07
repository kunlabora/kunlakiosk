#!/bin/bash

previous_status="unknown"

while true; do
    # Scan CEC devices
    output=$(echo "scan" | cec-client -s -d 1)

    # Extract the current Apple TV power status
    current_status=$(echo "$output" | awk '
    /^device #/ {found=0}  # Reset at each new device block
    /vendor: *Apple/ {found=1}  # Detect the Apple TV block
    found && /power status:/ {print $NF; exit}  # Print last field in correct "power status:" line')

    # Debug output
    echo "Apple TV is $current_status"

    # Check if the status changed from "on" to "standby"
    if [[ "$previous_status" == "on" && "$current_status" == "standby" ]]; then
        echo "Apple TV went to standby, switching to Raspberry PI HDMI channel..."
        echo "as" | cec-client -s -d 1
    fi

    # Update previous status
    previous_status="$current_status"

    sleep 10
done
