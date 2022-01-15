import Language from "../../../Language.json";
import { Card } from "./style";

export default function UserCard(props:{name:string,path:string,id:number}) {
    const {name,path,id} = props;
    return (
        <Card>
          <div className="CardColor">
            <div className="CardContent">
              <img className="ProfilePicture" src={path}></img>
              <p className="ProfileName">{name}</p>
              <button className="CardProfileButton">
                {Language.en_us.ProfileButtonText}
              </button>
            </div>
          </div>
        </Card>
      );
}
