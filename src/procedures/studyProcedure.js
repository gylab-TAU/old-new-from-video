import * as stimTrial from "../components/imageKeyComponent";

export class studyProcedure {
    constructor(stimFolder, stimImageName, numOld, numNew, fileExtension) {
        this.stimFolder = stimFolder;
        this.stimImageName = stimImageName;
        this.numOld = numOld;
        this.numNew = numNew;
        this.fileExtension = fileExtension;
    }

    getProcedure() {
        let procedure = {
            timeline: [stimTrial.default.getTrial()],
            timeline_variables: this.getTimelineVariables(),
            randomize_order: true
        }

        return procedure;
    }

    getTimelineVariables() {
        let timelineVariables = [];

        for (let i = 1; i <= this.numOld; i++) {
            let path = "media/images/" + this.stimFolder + "/old/" + this.stimImageName + i + "." + this.fileExtension;
            let pathObject = {path: path};

            timelineVariables.push(pathObject);
        }
        return timelineVariables;
    }
}