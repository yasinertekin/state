import React from 'react';
import {View, Text, Switch, FlatList} from 'react-native';
import {useState} from 'react';
const data = [
  {id: 0, name: 'cafe.exe', isFavorite: true},
  {id: 1, name: 'KafaKafe', isFavorite: false},
  {id: 2, name: 'BugG', isFavorite: false},
  {id: 3, name: 'Rock`n Code', isFavorite: true},
  {id: 4, name: 'do(drink)', isFavorite: false},
];
function App() {
  const [cafelist, Setcafelist] = useState(data); // cafeler için state yarattık cafelistin default değerine datayı verdik
  const [showFavorite, setShowFavorite] = useState(false); //buton için state yarattık

  function update(isSelected) {
    //isSelected parametresi aldı
    setShowFavorite(isSelected);
    isSelected
      ? Setcafelist(cafelist.filter(cafe => cafe.isFavorite))
      : Setcafelist(data);
  }

  return (
    <View>
      <Switch value={showFavorite} onValueChange={update} />
      <FlatList
        data={cafelist}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

export default App;

/* Bu kodda, Switch bileşeni kullanıcının onValueChange olayını tetiklediğinde update fonksiyonu çağrılıyor. Switch bileşeninin value özelliği showOnlyFavorites durumunu yansıtıyor. Başlangıçta showOnlyFavorites değeri false olarak ayarlandığından, Switch bileşeni "kapalı" konumda başlayacaktır.

Kullanıcı Switch bileşenini açık konuma getirdiğinde, onValueChange olayı tetiklenir ve update fonksiyonu çağrılır. update fonksiyonu, setshowOnlyFavorites fonksiyonunu çağırarak showOnlyFavorites durumunu isFavoriteSelected değeriyle günceller. Eğer Switch bileşeni "açık" konuma getirildiyse, isFavoriteSelected değeri true olacak ve showOnlyFavorites durumu true olarak güncellenecektir.

Bu sayede Switch bileşeni "açık" konuma geçer ve sayfa yeniden render edilir. Kullanıcı Switch bileşenini tekrar "kapalı" konuma getirdiğinde, onValueChange olayı yine tetiklenir ve showOnlyFavorites durumu false olarak güncellenir. Bu sayede Switch bileşeni tekrar "kapalı" konuma geçer ve sayfa yeniden render edilir. */
