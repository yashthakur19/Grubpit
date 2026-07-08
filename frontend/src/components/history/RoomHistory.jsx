import './RoomHistory.css';
function RoomHistory({ room }) {
 
    return (

        <div className="room-history">
            <h1 style={{ color: '#000000' }}>Recent Rooms</h1>
          {room.length === 0 ? (
            <p>No rooms available.</p>
          ) : (
            <ul>
              {room.map((roomData, index) => (
                <li key={index}>
                  <strong>Room Name:</strong> {roomData.roomName} <br />
                 
                  <strong>Participants:</strong> {roomData?.participants?.length  || 0}
                </li>
              ))}
            </ul>
          )}


        </div>
    );
}

export default RoomHistory;