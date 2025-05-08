import type { AccordionItem } from "../interface"

export const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: 'Open Me, Please.',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </p>
      ),
    },
    {
      id: 2,
      title: 'Or me...',
      content: (
        <ul className="list-disc ml-5">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Qui explicabo soluta deleniti vel?</li>
          <li>Esse aperiam unde quam cupiditate!</li>
          <li>Laboriosam magnam neque cumque. Nisi.</li>
          <li>Doloremque eum quibusdam sit incidunt.</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: 'You could open me up.',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore maxime perspiciatis amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </p>
      ),
    },
    {
      id: 4,
      title: 'Definitely click on me though.',
      content: (
        <div className="text-center">
          <img
            src="http://media.giphy.com/media/hUldButOAGC64/giphy.gif"
            alt="Happy"
            className="rounded border-4 border-white mx-auto"
          />
          <h3 className="text-green-600 mt-2">Happy Holidays, CodePen!</h3>
        </div>
      ),
    },
  ];