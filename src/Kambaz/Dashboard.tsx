import { useSelector } from "react-redux";

export default function Dashboard({ courses }: { courses: any[] }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard">
      <h2>Dashboard</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div className="col" key={course._id} style={{ width: 300 }}>
              <div className="card">
                <img src={course.image} className="card-img-top" alt={course.name} />
                <div className="card-body">
                  <h5 className="card-title text-nowrap overflow-hidden">{course.name}</h5>
                  <p className="card-text">{course.description}</p>
                  <a
                    href={`/Kambaz/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}