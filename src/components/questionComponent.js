import HtmlButtonResponse from "@jspsych/plugin-html-button-response";

class questionComponent {
    static getTrial() {
        let trial = {
            type: HtmlButtonResponse,
            stimulus: '<div></div>',
            choices: ["Old", "New"],
            prompt: '<p>Is this face old or new?</p>',
          };

        return trial;
    }
}

export default questionComponent;