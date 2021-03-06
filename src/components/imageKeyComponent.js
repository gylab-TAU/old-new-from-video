import ImageKeyboardResponsePlugin from "@jspsych/plugin-image-keyboard-response";

class imageKeyComponent {
    static getTrial() {
        let imageHeight = Math.round(window.screen.availHeight / 2);
        let trial = {
            type: ImageKeyboardResponsePlugin,
            stimulus: jsPsych.timelineVariable("path"),
            stimulus_duration: 1000,
            trial_duration: 2000,
            maintain_aspect_ratio: true,
            stimulus_height: imageHeight
        };

        return trial;
    }
}

export default imageKeyComponent;