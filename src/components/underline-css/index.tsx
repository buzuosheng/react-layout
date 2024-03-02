import "./index.css";

let a = '{'
let b = '}'

export function Underline() {
  return (
    <div className="h-content w-[700px] bg-gray-50 text-xl p-4 mb-4 rounded-lg">
      <h2 className="text-left">示例</h2>
      <h2 className="indent-8 text-left leading-loose ">
        <span className="
        bg-gradient-to-r from-[#43e97b] to-[blue] bg-no-repeat bg-right-bottom
        bg-[length:0_2px]
        hover:bg-left-bottom hover:bg-[length:100%_2px]
        transition-[background-size] duration-1000">谁都能一帆风顺啊？谁这辈子还不遇上点儿事啊？你就拿我来说吧，过去大小也算个干部。我不是跟你吹啊，十八岁毕业我就到了自行车厂。我是先入团后入党，我上过三次光荣榜，厂长特别器重我，眼瞅要提副组长。领导一直跟我谈话，说单位减员要并厂，当时我就表了态，咱工人要替国家想，我不下岗谁下岗？</span>
        {/* <span>且停亭</span>
        <span>名乎利乎，道路奔波休碌碌</span>
        <span>来者往者，溪山清静且停停</span> */}
      </h2>
      <br />
      <h2 className="text-left">纯css</h2>
      <h2 className="indent-8 text-left leading-loose ">
        <code className="whitespace-pre break-all overflow-auto langu">
          code {a} <br />
          background: linear-gradient(to right, #43e97b, blue)<br />
          no-repeat right bottom;<br />
          background-size: 0 2px;<br />
          transition: background-size 1s;<br />
          {b}
          <br />
        </code>
        <code>
          code:hover {a} <br />
          background-position: left bottom; <br />
          background-size: 100% 2px;<br />
          {b}
        </code>
        {/* <span>且停亭</span>
        <span>名乎利乎，道路奔波休碌碌</span>
        <span>来者往者，溪山清静且停停</span> */}
      </h2>
      <br />
      <h2 className="text-left">tailwindcss</h2>
      <h3 className="indent-8 text-left leading-loose ">
        <code className="
        bg-gradient-to-r from-[#43e97b] to-[blue] bg-no-repeat bg-right-bottom
        bg-[length:0_2px]
        hover:bg-left-bottom hover:bg-[length:100%_2px]
        transition-[background-size] duration-1000">
          bg-gradient-to-r from-[#43e97b] to-[blue] bg-no-repeat bg-right-bottom
          bg-[length:0_2px]
          hover:bg-left-bottom hover:bg-[length:100%_2px]
          transition-[background-size] duration-1000
        </code>
      </h3>
    </div>
  )
}