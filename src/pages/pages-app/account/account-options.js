{/* <Stack.Navigator >
    <Stack.Screen 
        name="Account"
        component={Content}
        options={{
            headerTintColor: '#613EEA',
            title: "Profile",
            headerRightContainerStyle: {
                paddingRight: 36
            },
            headerRight: ()=> {
                return (
                    <TouchableOpacity onPress={() => {
                        navigation.toggleDrawer();
                    }}>
                        <Ionicons 
                        name="menu"
                        style={{
                            fontSize: 26,
                            color: "#613EEA"
                        }}
                        ></Ionicons>
                    </TouchableOpacity>
                )
            },
        }} 
    />
            
</Stack.Navigator> */}