import {Card, CardHeader, CardBody, Image} from "@heroui/react";

export function Fridays() {
  return (
    <div className="dark text-foreground bg-background pt-20">
      <Card className="p-6 bg-default"> {/* Kept padding around the card */}
        <CardBody className="flex flex-row-reverse items-center gap-10">
          {/* Image on the Right */}
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-40 h-40"
            src="/assets/rip-logo.png"
          />

          {/* Text on the Left */}
          <div className="pl-6"> {/* Ensures padding between image & text */}
            <h4 className="font-bold text-large">US 2X Fridays</h4>
            <small className="text-gray-500">Online Players: 1/200</small>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export function Mondays() {
  return (
    <div className="dark text-foreground bg-background pt-20">
      <Card className="p-6 bg-default"> {/* Kept padding around the card */}
        <CardBody className="flex flex-row-reverse items-center gap-10">
          {/* Image on the Right */}
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-40 h-40"
            src="/assets/rip-logo.png"
          />

          {/* Text on the Left */}
          <div className="pl-6"> {/* Ensures padding between image & text */}
            <h4 className="font-bold text-large">US 2X Mondays</h4>
            <small className="text-gray-500">Online Players: 1/200</small>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}


