import { FlatList } from "react-native";
import { FooterListItem } from "./FooterListItem";

export function FooterList(props){
    return (
        <FlatList
            data={props.data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <FooterListItem 
                    image={item.image} 
                    title={item.title} 
                    valor={item.valor}
                    description1={item.description1}
                    description2={item.description2}
                />
            )}
                keyExtractor={(item) => item.id}
                
            />
    );
}
