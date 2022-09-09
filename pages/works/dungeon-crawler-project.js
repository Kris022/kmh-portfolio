import ProjectHeader from "../../components/works/ProjectHeader";

export default function RougeLikeProject() {
  return (
    <div className="h-auto">
      <div className="max-w-[600px] m-auto mt-[30%] md:mt-[10%] text-gray-300 text-xl">
        <ProjectHeader
          title="Procedural Level Generation"
          tools="C++, SFML"
          gitlink="https://github.com/Kris022/kmh-portfolio"
        />
        <div className="p-2">
          <p className="mt-5">
          This was my first project using C++, initially it proved difficult as I had little to no experience with C++, however, I think like most for most new C++ devs,  after getting the hang of pointers and memory in general, the rest seemed to fall into place, and was not dissimilar to what other programming languages offer.
          </p>

          <p className="mt-5">
          This project started out as a simple game where player shoots at enemies to destroy them and looses if the enemy collides with the player character. To make it more interesting I opted to implement procedural level generation that is present in the dungeon crawler segment that is a key part in roguelike genre of games, such as Spelunky, rouge. Having procedurally generated levels greatly increase reliability and creates a unique experience every time players load a new level.
          </p>

          <p className="mt-5">
          In order to create a “dungeon” a room map has to be created. This is simply a 2 dimensional array, filled with 1s and 0s. Where 1s represent the rooms and 0 empty space.
          </p>

          <p className="mt-5">
          The dungeon map selects where the rooms will be by firstly picking a random index of the 2d array, and inserting a 1 there, then it gets all of the adjacent places to that 1, from the list of these adjacent rooms it selects 1 of them at random, inserts a 1 in there and repeats the process for that room until a number of specified rooms has been reached.
          </p>

          <p className="mt-5">
          Once a room map is generated a room object can be created at the x, y position which is deducted based on the indexes of the 1s in the dungeon map array.
          </p>

          <p className="mt-5">
          The room object is created from a room class, initially each room starts of as a square (or rect) with incomplete walls, the class also has a function to fill in each of the walls. After a room has been created based on the room map. Program checks for empty spaces next to the room, if there is not room at an adjacent index on the room map, then the wall facing that empty space is filled, however adjacent spaces where another room is or will be placed remain open to create corridors.
          </p>

        </div>
      </div>
    </div>
  );
}
