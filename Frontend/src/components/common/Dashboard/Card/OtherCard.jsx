import { Icon } from "@iconify/react/dist/iconify.js";
import "./OtherCard.css";
import { Link } from "react-router-dom";

export const StudentCard = ({ student }) => {
  const {
    id,
    image,
    name,
    desc,
    age,
    gender,
    icons,
    peopleFromSameClass,
    path = "",
  } = student;

  return (
    <div className="student-card">
      <p className="student-id">{id}</p>
      <p className="text-center mt-2">
        {" "}
        <Link to={path}>
          <img src={image} alt={name} className="student-image" />
        </Link>
      </p>
      <h2 className="student-name bold text-md">{name}</h2>
      <p className="student-desc bold text-xl">{desc}</p>

      <div className="student-icons">
        {icons?.map((icon, index) => (
          <Icon key={index} icon={icon} className="action-icon" />
        ))}
      </div>
      <div className="student-about text-left text-xl">
        <p>
          <strong>About</strong>
        </p>
        <p className="student-about-desc">{desc}</p>
      </div>
      <div className="student-info text-xl">
        <p className="flex-column">
          <span>Age</span>

          <span className="student-card-color">{age}</span>
        </p>
        <p className="flex-column">
          <span>Gender</span>{" "}
          <span className="student-card-color">{gender}</span>
        </p>
      </div>

      <div className="classmates mt-4 text-xl">
        <strong className="mt-4">People from the same class</strong>
        <div className="classmates-list">
          {peopleFromSameClass.slice(0, 4).map((person, index) => (
            <img
              key={index}
              src={person.image}
              alt={person.name}
              className="classmate-image"
            />
          ))}
          {peopleFromSameClass.length > 4 && (
            <span className="more-classmates">
              +{peopleFromSameClass.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export const StudentCardDetails = ({ student }) => {
  const {
    id,
    image,
    name,
    desc,
    age,
    gender,
    icons,
    peopleFromSameClass,
    path = "",
  } = student;

  return (
    <div className="student-card student-card-details">
      <div className="flex-center">
        <div className="w-60">
          <p className="text-center mt-2">
            {" "}
            <img src={image} alt={name} className="student-image" />
          </p>
          <h2 className="student-name bold text-md">{name}</h2>
          <p className="student-desc bold text-md">{desc}</p>

          <div className="student-icons">
            {icons?.map((icon, index) => (
              <Icon key={index} icon={icon} className="action-icon" />
            ))}
          </div>
        </div>
        <div className="w-40">
          <div className="student-about text-left text-xl">
            <p>
              <strong>About</strong>
            </p>
            <p className="student-about-desc">{desc}</p>
          </div>
          <div className="student-info text-xl">
            <p className="flex-column">
              <span>Age</span>

              <span className="student-card-color">{age}</span>
            </p>
            <p className="flex-column">
              <span>Gender</span>{" "}
              <span className="student-card-color">{gender}</span>
            </p>
          </div>

          <div className="classmates mt-4 text-xl">
            <strong className="mt-4">People from the same class</strong>
            <div className="classmates-list">
              {peopleFromSameClass?.slice(0, 4).map((person, index) => (
                <img
                  key={index}
                  src={person.image}
                  alt={person.name}
                  className="classmate-image"
                />
              ))}
              {peopleFromSameClass?.length > 4 && (
                <span className="more-classmates">
                  +{peopleFromSameClass.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
