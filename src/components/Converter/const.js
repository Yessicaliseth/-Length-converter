export const LONGITUDES = [
    {
        value: "KM",
        uiName: "Kilómetros"
    },
    {
        value: "HM",
        uiName: "Hectómetros"
    },
    {
        value: "DAM",
        uiName: "Decámetros"
    },
    {
        value: "M",
        uiName: "Metros"
    },
    {
        value: "DM",
        uiName: "Decímetros"
    },
    {
        value: "CM",
        uiName: "Centímetros"
    },
    {
        value: "MM",
        uiName: "Milimetros"
    }
]

export const PAIRS = {
    KM_HM: {
        operation: "multiply",
        value: 10,
    },
    KM_DAM: {
        operation: "multiply",
        value: 100,      
    },
    KM_M:{
        operation: "multiply",
        value: 1000,
    },
    KM_DM:{
        operation: "multiply",
        value: 10000,
    },
    KM_CM:{
        operation: "multiply",
        value: 100000,
    },
    KM_MM:{
        operation: "multiply",
        value: 1000000,
    },
    HM_KM: {
        operation: "split",
        value: 10,
    },
    HM_DAM: {
        operation: "multiply",
        value: 10,      
    },
    HM_M:{
        operation: "multiply",
        value: 100,
    },
    HM_DM:{
        operation: "multiply",
        value: 1000,
    },
    HM_CM:{
        operation: "multiply",
        value: 10000,
    },
    HM_MM:{
        operation: "multiply",
        value: 100000,
    },
    DAM_KM: {
        operation: "split",
        value: 100,      
    },
    DAM_HM: {
        operation: "split",
        value: 10,
    },
    DAM_M:{
        operation: "multiply",
        value: 10,
    },
    DAM_DM:{
        operation: "multiply",
        value: 100,
    },
    DAM_CM:{
        operation: "multiply",
        value: 1000,
    },
    DAM_MM:{
        operation: "multiply",
        value: 10000,
    },
    M_KM: {
        operation: "split",
        value: 1000,      
    },
    M_HM: {
        operation: "split",
        value: 100,
    },
    M_DAM:{
        operation: "split",
        value: 10,
    },
    M_DM:{
        operation: "multiply",
        value: 10,
    },
    M_CM:{
        operation: "multiply",
        value: 100,
    },
    M_MM:{
        operation: "multiply",
        value: 1000,
    },
    DM_KM: {
        operation: "split",
        value: 10000,      
    },
    DM_HM: {
        operation: "split",
        value: 1000,
    },
    DM_DAM:{
        operation: "split",
        value: 100,
    },
    DM_M:{
        operation: "split",
        value: 10,
    },
    DM_CM:{
        operation: "multiply",
        value: 10,
    },
    DM_MM:{
        operation: "multiply",
        value: 100,
    },
    CM_KM: {
        operation: "split",
        value: 100000,      
    },
    CM_HM: {
        operation: "split",
        value: 10000,
    },
    CM_DAM:{
        operation: "split",
        value: 1000,
    },
    CM_M:{
        operation: "split",
        value: 100,
    },
    CM_DM:{
        operation: "split",
        value: 10,
    },
    CM_MM:{
        operation: "multiply",
        value: 10,
    },
    MM_KM: {
        operation: "split",
        value: 1000000,      
    },
    MM_HM: {
        operation: "split",
        value: 100000,
    },
    MM_DAM:{
        operation: "split",
        value: 10000,
    },
    MM_M:{
        operation: "split",
        value: 1000,
    },
    MM_DM:{
        operation: "split",
        value: 100,
    },
    MM_CM:{
        operation: "split",
        value: 10,
    },
    KM_KM:{
        operation: "same",
        value: 1,
    },
    HM_HM:{
        operation: "same",
        value: 1,
    },
    DAM_DAM:{
        operation: "same",
        value: 1,
    },
    M_M:{
        operation: "same",
        value: 1,
    },
    DM_DM:{
        operation: "same",
        value: 1,
    },
    CM_CM:{
        operation: "same",
        value: 1,
    },
    MM_MM:{
        operation: "same",
        value: 1,
    },
}
