
export const colors = {
    color1: "#1B195B",
    color2: "#A167BA",
    color3: "#FFFFFF",
    color4: "rgb(45,45,45)",
    color5: "#f2f2f2",
    color6: "#f7f7f7",
    color7: "#eae9e5",
    color8: "#f9ba06",
}

export const defaultStyle = ({
    inputStyle: {
        height: 50,
        borderRadius: 7,
        borderBottomWidth: 1,
        borderBottomColor: colors.color3,
        padding: 15,
        color: colors.color5,
    },
    rowView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    basicView: {
        display: 'flex',
        padding: 20,
        gap: 10
    },
    fontStyle: {
        color: colors.color1,
        fontSize: 17,
        fontWeight: 900,

    },
    tinyButton: {
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: colors.color1,
        color: colors.color3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    }

})

export const defaultImg =
    "https://p.kindpng.com/picc/s/451-4517876_default-profile-hd-png-download.png";