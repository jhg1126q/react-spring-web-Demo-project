import { Link } from "react-router-dom";

const Task1Page = () => {
  const Task1 = [
    { id: "1", title: "task1" },
    { id: "2", title: "task2" },
    { id: "3", title: "task3" },
    { id: "4", title: "task4" },
    { id: "5", title: "task5" },
    { id: "6", title: "task6" },
    { id: "7", title: "task7" },
    { id: "8", title: "task8" },
    { id: "9", title: "task9" },
    { id: "10", title: "task10" },
  ];

  // 상대 경로로 진입한 후에는 따로 링크를 적어줄 필요가 없다
  // 상대 경로로 진입 했을 때에는 알아서 주소 뒤로 데이터가 입력되기 때문에
  // '/task/' 를 적을 필요가 없습니다
  return (
    <>
      <p>Task1Page 입니다</p>
      <ul>
        {Task1.map((data) => {
          return (
            <li key={data.id}>
              <Link to={`${data.id}`}>{data.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Task1Page;
