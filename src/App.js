import { Select } from "@contentstack/venus-components";
function App() {
  return (
    <div>
      <Select
        onChange={() => {}}
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
          {
            label: "Option 3",
            value: 3,
          },
        ]}
      />
      {/* <Select
        onChange={() => {}}
        isMulti
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
          {
            label: "Option 3",
            value: 3,
          },
        ]}
      /> */}
    </div>
  );
}

export default App;
