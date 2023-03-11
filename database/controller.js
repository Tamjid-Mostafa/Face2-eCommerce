/*  Controller  */

export async function getUser(req, res) {
  try {
    res.status(200).json({ user: 'GET Request' })
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
export async function postUser(req, res) {
  try {
    res.status(200).json({ user: 'GET Request' })
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
export async function putUser(req, res) {
  try {
    res.status(200).json({ user: 'GET Request' })
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
export async function deleteUser(req, res) {
  try {
    res.status(200).json({ user: 'GET Request' })
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' })
  }
}
