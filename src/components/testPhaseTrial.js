import ImageKeyboardResponsePlugin from "@jspsych/plugin-image-keyboard-response";

class testPhaseTrial {
    static getTrial() {
        let imageHeight = Math.round(window.screen.availHeight / 2);
        let trial = {
            type: ImageKeyboardResponsePlugin,
            stimulus: jsPsych.timelineVariable("path"),
            response_ends_trial: true,
            maintain_aspect_ratio: true,
            stimulus_height: imageHeight,
            choices: ["0", "1"]
        };

        return trial;
    }
}

export default testPhaseTrial;