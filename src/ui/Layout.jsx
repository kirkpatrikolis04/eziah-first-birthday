import { useState, useEffect } from 'react'
import Modal from "../components/Modal";
import Header from "../components/Header";
import Hero from "./Hero";
import EvenDetails from './EventDetails';
import MonthlyMilestones from './MonthlyMilestones';
import DressCode from './DressCode';
import GiftIdeas from './GiftIdeas';
import Reminder from './Reminder';
import Rsvp from './Rsvp';
import Loader from '../components/Loader';
import ErrorPage from './ErrorPage';

const Layout = () => {

    const [modal, setModal] = useState(false);
    const [alreadyResponded, setAlreadyResponded] = useState(false)
    const [submittedOnce, setSubmittedOnce] = useState(false)
    const [membersList, setMembersList] = useState(null);
    const [urlId, setUrlId] = useState(null);
    const [siteError, setSiteError] = useState(false)

    useEffect(() => {
        // Extract id from URL query string
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');
        if (id) {
            setUrlId(id);
        }
    }, []);


    useEffect(() => {
        if (!urlId) return; // Don't fetch if urlId is not available

        const fetchData = async () => {
            try {
                const response = await fetch(`https://sheet2api.com/v1/PUlYBHXySfKr/eziah_1st-bday?id=${urlId}`);
                const results = await response.json();
                if(results.length > 0) {
                    results.forEach(item => {
                        setMembersList(item)
                        setAlreadyResponded(item.choice !== '' ? true : false)
                    });
                }  else {
                    setSiteError(true)
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [urlId]);

    const handleModal = () => {
        setModal(prev => !prev)
    }


    return ( 
        siteError ? (
            <ErrorPage />
        ) : (
            <div className="main-layout">
                {modal && (
                    <Modal membersList={membersList} urlId={urlId} handleModal={handleModal} alreadyResponded={alreadyResponded} setAlreadyResponded={setAlreadyResponded} submittedOnce={submittedOnce} setSubmittedOnce={setSubmittedOnce} />
                )}
                <Header />
                <Hero />
                <EvenDetails />
                <MonthlyMilestones />
                <DressCode />
                <GiftIdeas />
                <Reminder />
                <Rsvp handleModal={handleModal} />
                {!membersList && <Loader />}   
            </div>
        )
        
     );
}
 
export default Layout;