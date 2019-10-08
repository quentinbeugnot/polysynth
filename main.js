// --- Synth ----

//a polysynth composed of 6 Voices of Synth

const synth = new Tone.FMSynth().toMaster();

synth.oscillator.type = "sine";
synth.modulation.type = "sine";

  
  // --- Keyboard Presses ---
  
  let octave = 4;
  
  
  const c = document.getElementById('c');
  const cs = document.getElementById('cs');
  const d = document.getElementById('d');
  const ds = document.getElementById('ds');
  const e = document.getElementById('e');
  
  const f = document.getElementById('f');
  const fs = document.getElementById('fs');
  const g = document.getElementById('g');
  const gs = document.getElementById('gs');
  const a = document.getElementById('a');
  const as = document.getElementById('as');
  const b = document.getElementById('b');
  
  const cup = document.getElementById('cup');

  ///////////////////////
  // Envelope sliders //
  /////////////////////
  
  const carrier_vol_1 = document.getElementById('carrier_vol_1');
  const lfo_amount_car_vol_1 = document.getElementById('lfo_amount_car_vol_1');
  const lfo_speed_car_vol_1 = document.getElementById('lfo_speed_car_vol_1');

  const carrier_coarse_1 = document.getElementById('carrier_coarse_1');

  const carrier_attack_1 = document.getElementById('carrier_attack_1');
  const carrier_decay_1 = document.getElementById('carrier_decay_1');
  const carrier_sustain_1 = document.getElementById('carrier_sustain_1');
  const carrier_release_1 = document.getElementById('carrier_release_1');

  const modulator_vol_1 = document.getElementById('modulator_vol_1');
  const modulator_coarse_1 = document.getElementById('modulator_coarse_1');

  const modulator_attack_1 = document.getElementById('modulator_attack_1');
  const modulator_decay_1 = document.getElementById('modulator_decay_1');
  const modulator_sustain_1 = document.getElementById('modulator_sustain_1');
  const modulator_release_1 = document.getElementById('modulator_release_1');

  
  function Carrier_Vol_1_Update() {
    synth.volume.value = this.value;
  }
  function Lfo_Amount_Car_Vol_1_Update() {
    lfo.amplitude = this.value;
  }
  function Lfo_Speed_Car_Vol_1_Update() {
    lfo.frequency = this.value;
  }

  function Carrier_Vol_1_Update() {
    synth.volume.value = this.value;
  }
  function Carrier_Coarse_1_Update() {
    synth.harmonicity.value = this.value;
  }
  function Carrier_Attack_1_Update() {
    synth.envelope.attack = this.value;
  }
  function Carrier_Decay_1_Update() {
    synth.envelope.decay = this.value;
  }
  function Carrier_Sustain_1_Update() {
    synth.envelope.sustain = this.value;
  }
  function Carrier_Release_1_Update() {
    synth.envelope.release = this.value;
  }

  function Modulator_Vol_1_Update() {
    synth.modulation.volume.value = this.value;
  }
  function Modulator_Coarse_1_Update() {
    synth.modulationIndex.value = this.value;
  }
  function Modulator_Attack_1_Update() {
    synth.modulationEnvelope.attack = this.value;
  }
  function Modulator_Decay_1_Update() {
    synth.modulationEnvelope.decay = this.value;
  }
  function Modulator_Sustain_1_Update() {
    synth.modulationEnvelope.sustain = this.value;
  }
  function Modulator_Release_1_Update() {
    synth.modulationEnvelope.release = this.value;
  }

  carrier_vol_1.addEventListener('change', Carrier_Vol_1_Update);
  lfo_amount_car_vol_1.addEventListener('change', Lfo_Amount_Car_Vol_1_Update);
  lfo_speed_car_vol_1.addEventListener('change', Lfo_Speed_Car_Vol_1_Update);

  carrier_coarse_1.addEventListener('change', Carrier_Coarse_1_Update);
  carrier_attack_1.addEventListener('change', Carrier_Attack_1_Update);
  carrier_decay_1.addEventListener('change', Carrier_Decay_1_Update);
  carrier_sustain_1.addEventListener('change', Carrier_Sustain_1_Update);
  carrier_release_1.addEventListener('change', Carrier_Release_1_Update);

  modulator_vol_1.addEventListener('change', Modulator_Vol_1_Update);
  modulator_coarse_1.addEventListener('change', Modulator_Coarse_1_Update);
  modulator_attack_1.addEventListener('change', Modulator_Attack_1_Update);
  modulator_decay_1.addEventListener('change', Modulator_Decay_1_Update);
  modulator_sustain_1.addEventListener('change', Modulator_Sustain_1_Update);
  modulator_release_1.addEventListener('change', Modulator_Release_1_Update);


  ///////////////////////
  // Octave selection //
  /////////////////////


  window.onkeydown = function(event) {
    
     if (event.keyCode == 87) {
       if(octave >= 1){
            octave--;
          }
     }  
     if (event.keyCode == 88) {
       if(octave <= 6){
            octave++;
          }
     }
    
    
    // --- Play notes on key press ---

    
     if (event.keyCode == 81) {
       play_c();
       c.classList.add('key-pressed');
     }
    
     if (event.keyCode == 90) {
       play_cs();
       cs.classList.add('key-pressed');
     }
  
     if (event.keyCode == 83) {
       play_d();
       d.classList.add('key-pressed');
     }
     if (event.keyCode == 69) {
       play_ds();
       ds.classList.add('key-pressed');
     }
     if (event.keyCode == 68) {
       play_e();
       e.classList.add('key-pressed');
     }
     if (event.keyCode == 70) {
       play_f();
       f.classList.add('key-pressed');
     }
     if (event.keyCode == 84) {
       play_fs();
       fs.classList.add('key-pressed');
     }
     if (event.keyCode == 71) {
       play_g();
       g.classList.add('key-pressed');
     }
     if (event.keyCode == 89) {
       play_gs();
       gs.classList.add('key-pressed');
     }
     if (event.keyCode == 72) {
       play_a();
       a.classList.add('key-pressed');
     }
     if (event.keyCode == 85) {
       play_as();
       as.classList.add('key-pressed');
     }
     if (event.keyCode == 74) {
       play_b();
       b.classList.add('key-pressed');
     }
       if (event.keyCode == 75) {
       play_cup();
      cup.classList.add('key-pressed');
     }
  }
  
  window.onkeyup = function(event) {
    c.classList.remove('key-pressed');
    cs.classList.remove('key-pressed');
    d.classList.remove('key-pressed');
    ds.classList.remove('key-pressed');
    e.classList.remove('key-pressed');
    
    f.classList.remove('key-pressed');
    fs.classList.remove('key-pressed');
    g.classList.remove('key-pressed');
    gs.classList.remove('key-pressed');
    a.classList.remove('key-pressed');
    as.classList.remove('key-pressed');
    b.classList.remove('key-pressed');
    cup.classList.remove('key-pressed');

    if (event.keyCode == 81) {
      if(octave == 4){
        synth.triggerRelease("C4");
        }else if(octave == 0){
        synth.triggerRelease("C0");
        }else if(octave == 1){
        synth.triggerRelease("C1");
        }else if(octave == 2){
        synth.triggerRelease("C2");
        }else if(octave == 3){
        synth.triggerRelease("C3");
        }else if(octave == 5){
        synth.triggerRelease("C5");
        }else if(octave == 6){
        synth.triggerRelease("C6");
        }else if(octave == 7){
        synth.triggerRelease("C7");
        }
    }
  }
  
  // --- Clicking the visual keyboard ---
  
  c.onmousedown = function(event) {
    play_c();
    c.classList.add('key-pressed');
  }
  cs.onmousedown = function(event) {
    play_cs();
    cs.classList.add('key-pressed');
  }
  d.onmousedown = function(event) {
    play_d();
    d.classList.add('key-pressed');
  }
  ds.onmousedown = function(event) {
    play_ds();
    ds.classList.add('key-pressed');
  }
  e.onmousedown = function(event) {
    play_e();
    e.classList.add('key-pressed');
  }
  f.onmousedown = function(event) {
    play_f();
    f.classList.add('key-pressed');
  }
  fs.onmousedown = function(event) {
    play_fs();
    fs.classList.add('key-pressed');
  }
  g.onmousedown = function(event) {
    play_g();
    g.classList.add('key-pressed');
  }
  gs.onmousedown = function(event) {
    play_gs();
    gs.classList.add('key-pressed');
  }
  a.onmousedown = function(event) {
    play_a();
    a.classList.add('key-pressed');
  }
  as.onmousedown = function(event) {
    play_as();
    as.classList.add('key-pressed');
  }
  b.onmousedown = function(event) {
    play_b();
    b.classList.add('key-pressed');
  }
  cup.onmousedown = function(event) {
    play_cup();
    cup.classList.add('key-pressed');
  }
  
  window.onmouseup = function(event) {
    c.classList.remove('key-pressed');
    cs.classList.remove('key-pressed');
    d.classList.remove('key-pressed');
    ds.classList.remove('key-pressed');
    e.classList.remove('key-pressed');
    
    f.classList.remove('key-pressed');
    fs.classList.remove('key-pressed');
    g.classList.remove('key-pressed');
    gs.classList.remove('key-pressed');
    a.classList.remove('key-pressed');
    as.classList.remove('key-pressed');
    b.classList.remove('key-pressed');
    cup.classList.remove('key-pressed');

  }

  c.onmouseup = function(event) {
    if(octave == 4){
      synth.triggerRelease("C4");
      console.log('c released');
      }else if(octave == 0){
      synth.triggerRelease("C0");
      }else if(octave == 1){
      synth.triggerRelease("C1");
      }else if(octave == 2){
      synth.triggerRelease("C2");
      }else if(octave == 3){
      synth.triggerRelease("C3");
      }else if(octave == 5){
      synth.triggerRelease("C5");
      }else if(octave == 6){
      synth.triggerRelease("C6");
      }else if(octave == 7){
      synth.triggerRelease("C7");
      }
  }
  
  // --- Playing the notes ---
  
  function play_c(){
       if(octave == 4){
       synth.triggerAttack("C4");
       }else if(octave == 0){
       synth.triggerAttack("C0");
       }else if(octave == 1){
       synth.triggerAttack("C1");
       }else if(octave == 2){
       synth.triggerAttack("C2");
       }else if(octave == 3){
       synth.triggerAttack("C3");
       }else if(octave == 5){
       synth.triggerAttack("C5");
       }else if(octave == 6){
       synth.triggerAttack("C6");
       }else if(octave == 7){
       synth.triggerAttack("C7");
       }
  }
  
  function play_cs(){
       if(octave == 4){
       synth.triggerAttackRelease("C#4", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("C#0", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("C#1", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("C#2", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("C#3", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("C#5", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("C#6", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("C#7", "8n");
       }
  }
  
  function play_d(){
       if(octave == 4){
       synth.triggerAttackRelease("D4", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("D0", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("D1", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("D2", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("D3", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("D5", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("D6", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("D7", "8n");
       }
  }
  
  function play_ds(){
       if(octave == 4){
       synth.triggerAttackRelease("D#4", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("D#0", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("D#1", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("D#2", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("D#3", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("D#5", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("D#6", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("D#7", "8n");
       }
  }
  
  function play_e(){
       if(octave == 4){
       synth.triggerAttackRelease("E4", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("E0", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("E1", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("E2", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("E3", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("E5", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("E6", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("E7", "8n");
       }
  }
  
  function play_f(){
       if(octave == 4){
       synth.triggerAttackRelease("F4", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("F0", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("F1", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("F2", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("F3", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("F5", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("F6", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("F7", "8n");
       }
  }
  
  function play_fs(){
       if(octave == 4){
       synth.triggerAttackRelease("F#4", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("F#0", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("F#1", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("F#2", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("F#3", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("F#5", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("F#6", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("F#7", "8n");
       }
  }
  
  function play_g(){
       if(octave == 4){
       synth.triggerAttackRelease("G4", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("G0", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("G1", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("G2", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("G3", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("G5", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("G6", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("G7", "8n");
       }
  }
  
  function play_gs(){
       if(octave == 4){
       synth.triggerAttackRelease("G#4", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("G#0", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("G#1", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("G#2", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("G#3", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("G#5", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("G#6", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("G#7", "8n");
       }
  }
  function play_a(){
       if(octave == 4){
       synth.triggerAttackRelease("A4", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("A0", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("A1", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("A2", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("A3", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("A5", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("A6", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("A7", "8n");
       }
  }
  
  function play_as(){
       if(octave == 4){
       synth.triggerAttackRelease("A#4", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("A#0", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("A#1", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("A#2", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("A#3", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("A#5", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("A#6", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("A#7", "8n");
       }
  }
  
  function play_b(){
       if(octave == 4){
       synth.triggerAttackRelease("B4", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("B0", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("B1", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("B2", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("B3", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("B5", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("B6", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("B7", "8n");
       }
  }
  
  function play_cup(){
       if(octave == 4){
       synth.triggerAttackRelease("C5", "8n");
       }else if(octave == 0){
       synth.triggerAttackRelease("C1", "8n");
       }else if(octave == 1){
       synth.triggerAttackRelease("C2", "8n");
       }else if(octave == 2){
       synth.triggerAttackRelease("C3", "8n");
       }else if(octave == 3){
       synth.triggerAttackRelease("C4", "8n");
       }else if(octave == 5){
       synth.triggerAttackRelease("C6", "8n");
       }else if(octave == 6){
       synth.triggerAttackRelease("C7", "8n");
       }else if(octave == 7){
       synth.triggerAttackRelease("C8", "8n");
       }
  }
