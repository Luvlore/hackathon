
import { List, Card, Title, Paragraph, Avatar,Button } from 'react-native-paper';
import { View , SafeAreaView,Text  } from 'react-native';  
import { styles } from './auxiliar/Styles';

export function ConfirmClass(props){
    const {navigation} = props

    return(
        <>
            <SafeAreaView style={styles.backGround}>
                <Card style={styles.card}>
                    <Card.Content>  
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Avatar.Image size={60} style={styles.avatar}></Avatar.Image>
                            <Title>
                                Professora Paulinha
                            </Title>
                        </View>
                        <Paragraph>
                            Matéria: Física Qua e Sex 16h{'\n'}
                            Dias: Quarta e Sexta{'\n'}
                            Horário: 16h - 18h {'\n'}
                        </Paragraph>
                    </Card.Content>
                </Card>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>  CONFIRMAR O ALUNO:  </Text>
                </View>
                <View style={{width:"80%", marginLeft:"10%"}}>
                    <List.Item
                        style={styles.listItem}
                        title="Joãozinho"
                        description="Disponibilidade: Turno da Tarde"
                        left={props => <List.Icon {...props} icon="folder" />}
                        />

                </View>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>  Para a turma de PAULINHA ?  </Text>
                </View>
                <SafeAreaView style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={styles.buttons}>
                            <Button color={'#272343'} onPress={() => navigation.navigate('TeamManager')}>
                            Sim
                            </Button>
                        </View>

                        <View style={styles.buttons}>
                            <Button color={'#272343'}>
                            Não
                            </Button>
                        </View>

                </SafeAreaView>
            </SafeAreaView>
        </>
    
        )
}


