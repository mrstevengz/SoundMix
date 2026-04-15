import { sounds, defaultPresets } from "./soundData.js";
import { SoundManager } from "./soundManager.js";

class AmbientMixer {
  //Init dependencies and default state

  constructor() {
    console.log("Initializing state...");
    this.soundManager = new SoundManager();
    this.ui = null;
    this.presetManager = null;
    this.timer = null;
    this.currentSoundState = {};
    this.isInitialized = false;
  }

  init() {
    try {
      //Load all sound files

      this.loadAllSounds();
      console.log("Initializing app...");
      this.isInitialized = true;
    } catch (error) {
      console.error("Failed to initialize app", error);
    }
  }

  //Load all sound files

  loadAllSounds() {
    sounds.forEach((sound) => {
      const audioUrl = `audio/${sound.file}`;
      const success = this.soundManager.loadSound(sound.id, audioUrl);
      if (!success) {
        console.warn(`Could not load sound ${sound.name} from ${audioUrl}`);
      }
    });
  }
}

//Init app when DOM loads

document.addEventListener("DOMContentLoaded", () => {
  const app = new AmbientMixer();
  app.init();
});
