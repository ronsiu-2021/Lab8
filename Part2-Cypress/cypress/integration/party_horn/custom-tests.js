describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider is changed', () => {
    cy.get('#volume-slider')
      .invoke('val', 33)
      .trigger('input');
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of the <audio> element changed when the slider changed', () => {
    cy.get('#volume-slider')
      .invoke('val', 33)
      .trigger('input');
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Volume image goes from max to 2 bars when the volume level goes from 67 to 66', () => {
    cy.get('#volume-slider')
      .invoke('val', 67)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 66)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image goes from 2 bars to 1 bar when the volume level goes from 34 to 33', () => {
    cy.get('#volume-slider')
      .invoke('val', 34)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 33)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });
    
  it('Volume image goes from 1 bars to mute when the volume level goes from 1 to 0', () => {
    cy.get('#volume-slider')
      .invoke('val', 1)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 0)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Except honk button to be disabled now that volume is mute', () => {
    cy.get('#volume-slider')
      .invoke('val', 0)
      .trigger('input');
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('Image & Sound changes when radio buttons are swapped', () => {
    cy.get('#radio-car-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/car.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3');
    });
  });

  it('Horn honk is played when the honk button is clicked', () => {
    cy.get('#volume-slider')
      .invoke('val', 30)
      .trigger('input');
    cy.get('#honk-btn').click();
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('paused', false);
    });
  });
});