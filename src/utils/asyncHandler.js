// const asyncHandler = (fun) => async (req, res, next) => {
//     try {
//         await fun(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }


// const asynchandler=() =>{()=>{}}
//  aur
// const asynchandler=() =>()=>{}


// in promise




const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch ((err) => next(err))
    }
}

export { asyncHandler }