import ProjectHeader from "../../components/works/ProjectHeader";

export default function OpenCVProject() {
  return (
    <div className="h-auto">
      <div className="max-w-[600px] m-auto mt-[30%] md:mt-[10%] text-gray-300 text-xl">
        <ProjectHeader
          title="Facial Recognition Gateway"
          tools="Python, OpenCV, TKinter"
          gitlink="https://github.com/Kris022/kmh-portfolio"
        />

        <div className="p-2">
          <p className="mt-5">
            In my college there was this gate opened using student RFID cards.
            This solution had some problems, students could loose their card or
            often would just let unauthorised people onto the premises
            themselves.
          </p>

          <p className="mt-5">
            My project solved this problem by implementing a facial recognition
            system at the gate, that would open the gate only to open, once a
            face has been recognised. Now you might say that students can still
            open the gate and let anyone in, this was also solved through
            implementing a notification system, that is if the camera detected
            an unrecognised face, it would send an email notification to members
            of staff, or dedicated staff email (this was left up to the users to
            configure for themselves), informing them of an unauthorised
            individual, along with their time and date of entry and a snapshot
            of their face.
          </p>

          <p className="mt-5">
            The idea was to integrated the software with the hardware using a
            raspberry pi, however needless to say I did not have access to my
            schools actual gate, therefore I decided to use an led that would
            light up to signal the gate being open. I could have built a
            miniature gate however time frame did not allow for this, although
            the code for activating the led could easily be adapted for freeing
            the magnet holding the gate locked.
          </p>
        </div>
      </div>
    </div>
  );
}
