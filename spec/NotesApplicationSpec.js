'use strict';

describe("Create a NoteApplication:", function() {
  var notesApplication;
  //var song;

  beforeEach(function() {
    notesApplication = new NotesApplication();
    //song = new Song();
  });

  it("should be able to create notes", function() {
    expect(notesApplication.createNotes()).toEqual("Good");
   // expect(notesApplication.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
   // expect(player).toBePlaying(song);
  });

 });

 