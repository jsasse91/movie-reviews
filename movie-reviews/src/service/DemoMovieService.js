export default class DemoMovieService {
  all() {
    return Promise.resolve([
      {
        id: 1,
        title: "The Goonies",
        releaseYear: "1985",
        rating: 3,
        img: "https://play-lh.googleusercontent.com/tTBjTjlp4ul6VLmLUMm4OLWGUl117ePG04u6XCVgkSOqr_lu0g3oXACoS863-Av_d7XYPiVNuRWp7XqEjA",
        synopsis: `Old-fashioned yarn about a band of adventurous kids who take on the might of a property developing company which plans to destroy 
        their home to build a country club. When the children discover an old pirate map in the attic, they follow it into an underground cavern in 
        search of lost treasure but come up against plenty of dangerous obstacles along the way.`,
        review: '',
      },
      {
        id: 2,
        title: "The Greatest Showman",
        releaseYear: "2017",
        rating: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENcOUDWt5NOv7HIDGJRP5Um1mC9HvzSVwZQ&usqp=CAU",
        synopsis: `Growing up in the early 1800s, P.T. Barnum displays a natural talent for publicity and promotion, selling lottery tickets by age 12. 
        After trying his hands at various jobs, P.T. turns to show business to indulge his limitless imagination, rising from nothing to create the 
        Barnum & Bailey circus. Featuring catchy musical numbers, exotic performers and daring acrobatic feats, Barnum's mesmerizing spectacle soon takes 
        the world by storm to become the greatest show on Earth.`,
      },
      {
        id: 3,
        title: "Moana",
        releaseYear: "2016",
        rating: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdUt3RtLJYwHfWwz-06rvlluKVIzptcHBQg&usqp=CAU",
        synopsis: `An adventurous teenager sails out on a daring mission to save her people. During her journey, Moana meets the once-mighty demigod Maui, 
        who guides her in her quest to become a master way-finder. Together they sail across the open ocean on an action-packed voyage, encountering enormous 
        monsters and impossible odds. Along the way, Moana fulfills the ancient quest of her ancestors and discovers the one thing she always sought: her own identity.`,
      },
      {
        id: 4,
        title: "Casino Royale",
        releaseYear: "2006",
        rating: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dsEvPp_K8ce2EYCKl-yvAVHucPY33a7QDg&usqp=CAU",
        synopsis: `After receiving a license to kill, British Secret Service agent James Bond (Daniel Craig) heads to Madagascar, where he uncovers a link to 
        Le Chiffre (Mads Mikkelsen), a man who finances terrorist organizations. Learning that Le Chiffre plans to raise money in a high-stakes poker game, 
        MI6 sends Bond to play against him, gambling that their newest "00" operative will topple the man's organization.`,
      },
      {
        id: 5,
        title: "Gladiator",
        releaseYear: "2000",
        rating: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzd7yRUyPmphOawjkKiPFvNK9hkXoA7wG0g&usqp=CAU",
        synopsis: `Set in Roman times, the story of a once-powerful general forced to become a common gladiator. The emperor's son is enraged when he is passed 
        over as heir in favour of his father's favourite general. He kills his father and arranges the murder of the general's family, and the general is sold 
        into slavery to be trained as a gladiator - but his subsequent popularity in the arena threatens the throne.`,
      },
      {
        id: 6,
        title: "Terminator 2: Judgement Day",
        releaseYear: "1991",
        rating: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIeQqDkL1F2lkeWuNPdkrI7TF_3Y56YQm-g&usqp=CAU",
        synopsis: `In this sequel set eleven years after "The Terminator," young John Connor (Edward Furlong), the key to civilization's victory over a future robot 
        uprising, is the target of the shape-shifting T-1000 (Robert Patrick), a Terminator sent from the future to kill him. Another Terminator, the revamped T-800 
        (Arnold Schwarzenegger), has been sent back to protect the boy. As John and his mother (Linda Hamilton) go on the run with the T-800, the boy forms an unexpected
         bond with the robot.`,
      }
    ]);
  }
}
