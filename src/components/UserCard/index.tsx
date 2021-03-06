import { useState } from "react";
import Language from "../../../Language.json";
import { Card } from "./style";
import Link from "next/link";

export default function UserCard(props:{name:string,path:string, bgImg: string, id:number}) {
    const {name,path,bgImg,id} = props;  
    
    return (
        <Card>
          <div className="CardColor" style={{backgroundImage : `url(${bgImg}`}}>
            <div className="CardContent">
              <img className="ProfilePicture" src={path}></img>
              <p className="ProfileName">{name}</p>
              <Link href={`/profile/${id}`} passHref>
                <button className="CardProfileButton">
                  Profile
                </button>
              </Link>
            </div>
          </div>
        </Card>
      );
}
