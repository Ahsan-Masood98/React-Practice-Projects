import React from "react";

const Candidates = ({ persons }) => {
  return (
    <>
      {persons.length === 0 ? (
        <> </>
      ) : (
        <div style={{ width: "300px", margin: "60px auto" }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Candidates;
