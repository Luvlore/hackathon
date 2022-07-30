import React, { useEffect } from 'react';
import { Checkbox } from 'react-native-paper';
import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  
import DropDownPicker from 'react-native-dropdown-picker';
import Header from './auxiliar/Header';
import axios from 'axios';

const styles = {
    borderSettings : {border: '1px solid black'},
    header : {alignItems: 'center',justifyContent: 'center',backgroundColor: 'aquamarine',display:'flex' },
    titleH1 : {fontSize: 30},
    titleH2 : {fontSize: 20},
    boxForms : {display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black'},
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    boxButtons : {
        display: 'flex',
        justifyContent: 'center',
        width : "60%",
        marginLeft : "20%",
        marginTop : "0.5rem",
        marginBottom : "0.5rem"
    },      
}

const states = [
    {label : "AC" , value : "AC"},
    {label : "AL" , value : "AL"},
    {label : "AP" , value : "AP"},
    {label : "AM" , value : "AM"},
    {label : "BA" , value : "BA"},
    {label : "CE" , value : "CE"},
    {label : "DF" , value : "DF"},
    {label : "ES" , value : "ES"},
    {label : "GO" , value : "GO"},
    {label : "MA" , value : "MA"},
    {label : "MT" , value : "MT"},
    {label : "MS" , value : "MS"},
    {label : "MG" , value : "MG"},
    {label : "PA" , value : "PA"},
    {label : "PB" , value : "PB"},
    {label : "PR" , value : "PR"},
    {label : "PE" , value : "PE"},
    {label : "PI" , value : "PI"},
    {label : "RJ" , value : "RJ"},
    {label : "RN" , value : "RN"},
    {label : "RS" , value : "RS"},
    {label : "RO" , value : "RO"},
    {label : "RR" , value : "RR"},
    {label : "SC" , value : "SC"},
    {label : "SP" , value : "SP"},
    {label : "SE" , value : "SE"},
    {label : "TO" , value : "TO"},
]


function RegisterUser(props) {

    const { route,navigation } = props;
    const params = route.params;
    const typeUrls = ['/donators', '/volunteers', 'service-centers', '/stundets'];
    const endpoint = typeUrls[params.type];

    const getData = async () => {
        const response = await fetch(endpoint);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        getData();
    }, [])

    const [name, setName] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [age, setAge] = React.useState("");
    const [cep, setCep] = React.useState("");
    const [city, setCity] = React.useState("");
    const [observationField, setObservationField] = React.useState("");
    const [job, setJob] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [university, setUniversity] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [school, setSchool] = React.useState("");
    const [schoolYear, setSchoolYear] = React.useState("");
    const [motherName, setMotherName] = React.useState("");
    const [familyCode, setFamilyCode] = React.useState("");

    const [financialHelp, setFinancialHelp] = React.useState(false);
    const [materialHelp, setMaterialHelp] = React.useState(false);
    const [morningPeriod, setMorningPeriod] = React.useState(false);
    const [afternoonPeriod, setAfternoonPeriod] = React.useState(false);
    const [nightPeriod, setNightPeriod] = React.useState(false);
    const [allDayPeriod, setAllDayPeriod] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState(states);

    function finishRegistration(){
        const cityId = axios.get(`/cities/${city}`).id;

        navigation.navigate('LoogedScreen', {type: params.type})
        axios.post(endpoint, {
            name,
            cpf,
            age,
            city,
            observations: observationField !== '' && observationField,
            university: university !== '' && university,
            school: school !== '' && school,
            mother_name: motherName !== '' && motherName,
            family_code: familyCode !== '' && familyCode,
            school_year: schoolYear !== '' && schoolYear,
            subject: subject !== '' && subject,
            city: cityId,
            email,
            password,
            job: job !== '' && job

        })
        setName("")
        setCep("")
        setCpf("")
        setAge("")
        setCity("")
        setObservationField("")
        setJob("")
        setEmail("")
        setPassword("")
        setUniversity("")
        setSubject("")
        setSchool("")
        setSchoolYear("")
        setMotherName("")
        setFamilyCode("")
    }
    return (
        <>
            <ScrollView>
                <Header></Header>
                <SafeAreaView>
                    <View >
                        {/* COMUM A TODOS */}
                        <View>
                            <Text >Nome:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setName}
                            value={name}
                            />
                        </View>
                        <View>
                            <Text >CPF:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setCpf}
                            value={cpf}
                            />
                        </View>
                        <View>
                            <Text >Idade:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setAge}
                            value={age}
                            />
                        </View>
                        <View>
                            <Text >Data de Nascimento:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            />
                        </View>
                        <View>
                            <Text >CEP:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setCep}
                            value={cep}
                            />
                        </View>
                        <View>
                            <Text >Cidade:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setCity}
                            value={city}
                            />
                        </View>



                        <View>
                            <Text >Observação:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setObservationField}
                            value={observationField}
                            />
                        </View>
                        <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        searchable={true}
                        searchTextInputProps={{
                            maxLength: 25
                        }}
                        containerStyle={{
                            width: "20%",
                        }}
                        />
                        {(params.type === 0) && // DOADOR
                        
                        <View>  
                            <View>
                                <Text >Profissão:</Text>
                                <TextInput
                                style={styles.borderSettings}
                                onChangeText={setJob}
                                value={job}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <Text >Categoria de Ajuda: </Text>
                                <Text>Financeira</Text>
                                <Checkbox
                                status={financialHelp ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setFinancialHelp(!financialHelp);
                                }}
                                />
                                <Text>Material</Text>
                                <Checkbox
                                status={materialHelp ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setMaterialHelp(!materialHelp);
                                }}
                                />
                            </View>
                        </View>}

                        {(params.type===1) && // VOLUNTÁRIO
                        
                        <View>    
                            <View>
                                <Text >Universidade:</Text>
                                <TextInput
                                style={styles.borderSettings}
                                onChangeText={setUniversity}
                                value={university}
                                />
                            </View>
                            <View>
                                <Text >Disciplina oferecida:</Text>
                                <TextInput
                                style={styles.borderSettings}
                                onChangeText={setSubject}
                                value={subject}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <Text >Período:</Text>
                                <Text>Matutino</Text>
                                <Checkbox
                                status={morningPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setMorningPeriod(!morningPeriod);
                                }}
                                />
                                <Text>Vespertino</Text>
                                <Checkbox
                                status={afternoonPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setAfternoonPeriod(!afternoonPeriod);
                                }}
                                />
                                <Text>Noturno</Text>
                                <Checkbox
                                status={nightPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setNightPeriod(!nightPeriod);
                                }}
                                />
                            </View>
                        </View>}

                        {(params.type===3) && // ALUNO
                        <View>
                            <View>
                            <Text >Escola:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setSchool}
                            value={school}
                            />
                            </View> 
                            <View>
                            <Text >Ano:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setSchoolYear}
                            value={schoolYear}
                            />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <Text >Categoria de Ajuda:</Text>
                                <Text>Financeira</Text>
                                <Checkbox
                                status={financialHelp ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setFinancialHelp(!financialHelp);
                                }}
                                />
                                <Text>Material</Text>
                                <Checkbox
                                status={materialHelp ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setMaterialHelp(!materialHelp);
                                }}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <Text>Período:</Text>
                                <Text>Matutino</Text>
                                <Checkbox
                                status={morningPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setMorningPeriod(!morningPeriod);
                                }}
                                />
                                <Text>afternoonPeriod</Text>
                                <Checkbox
                                status={afternoonPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setAfternoonPeriod(!afternoonPeriod);
                                }}
                                />
                                <Text>Integral</Text>
                                <Checkbox
                                status={allDayPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setAllDayPeriod(!allDayPeriod);
                                }}
                                />
                            </View> 
                            <View>
                            <Text >Nome da Mãe:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setMotherName}
                            value={motherName}
                            />
                            </View> 
                            <View>
                            <Text >Código familiar:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setFamilyCode}
                            value={familyCode}
                            />
                            </View>
                        </View>
                        }

                        <View>
                            <Text >Email:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setEmail}
                            value={email}
                            />
                        </View>

                        <View>
                            <Text>Senha:</Text>
                            <TextInput
                            onChangeText={setPassword}
                            style={styles.borderSettings}
                            value={password}
                            secureTextEntry={true}
                            textContentType="password"
                            />
                        </View>
                    </View>
                </SafeAreaView>

                <View style={styles.boxButtons}>
                <Button title="Finalizar" onPress={finishRegistration} />
                </View>
            
                <Text style={styles.header}> 
                    Referências
                </Text>
            </ScrollView>


        </>

  );
}

export default RegisterUser;
