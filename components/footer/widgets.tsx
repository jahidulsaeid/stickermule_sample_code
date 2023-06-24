import PaymentWidget from '../widgets/payment';
import WidgetContact from '../widgets/widget-contact';
import WidgetLink from '../widgets/widget-link';
import WidgetSocial from '../widgets/widget-social';

interface WidgetsProps {
  widgets: {
    id: number;
    widgetTitle: string;
    lists: any;
  }[];
}

const Widgets: React.FC<WidgetsProps> = ({ widgets }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-9 lg:gap-x-8 xl:gap-5  pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24 lg:mb-0.5 2xl:mb-0 3xl:-mb-1">
        <WidgetContact />

        {widgets.map((widget, index) => (
          <WidgetLink data={widget} key={`widget-link-${index}`} />
        ))}
        <WidgetSocial />
        <PaymentWidget />
      </div>
    </div>
  );
};

export default Widgets;
