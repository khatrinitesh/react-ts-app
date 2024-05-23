import React,{useState} from "react";

const CustomApp = () => {

    const options:Option[] = [
        {id:1,label:'label 1'},
        {id:2,label:'label 2'},
        {id:3,label:'label 3'},
        {id:4,label:'label 4'},
        {id:5,label:'label 5'},
    ]
  return(
    <>
    <CustomRadio options={options}/>
    </>
  )
};

export default CustomApp;

interface Option {
  id: number;
  label: string;
}

const CustomRadio: React.FC<{ options: Option[]}> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionChange = (id: number) => {
    setSelectedOption(id);
  };
  return (
    <>
      <div>
      {options.map(option => (
        <div key={option.id} className="flex items-center">
          <input
            type="radio"
            id={option.id.toString()}
            name="customRadio"
            value={option.id.toString()}
            checked={selectedOption === option.id}
            onChange={() => handleOptionChange(option.id)}
            className="mr-2"
          />
          <label htmlFor={option.id.toString()} className="font-medium">
            {option.label}
          </label>
        </div>
      ))}
      </div>
    </>
  );
};
